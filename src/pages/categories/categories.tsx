import { useEffect, useState } from "react";
import { Button, IconButton, Input, Select, icons } from "../../components";
import {
  deleteCategory,
  editCategory,
  getAllCategories,
  saveCategory,
} from "../../services";
import { StyledCategories, StyledColorCard } from "./categories.styles";

export const Categories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const getCategories = async () => {
    const response = await getAllCategories({});

    setCategories(response[0]);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleAddCategory = async (e: any) => {
    e.preventDefault();

    const response = await saveCategory({ name, icon });

    if (!response) return;

    setName("");
    setIcon("");

    getCategories();
  };

  const applyEditionToCategory = async (e: any) => {
    e.preventDefault();

    await editCategory({ id: selectedId, name, icon });

    getCategories();
  };

  const handleDeleteCategory = async (id: string) => {
    await deleteCategory({ id });

    getCategories();
  };

  const handleEditCategory = async (id: string) => {
    setSelectedId(id);
    setIsEditing(true);

    const category = categories.find((category) => category.id === id);

    setName(category.name);
    setIcon(category.color);
  };

  const handleCancelEditing = () => {
    setName("");
    setIcon("");
    setIsEditing(false);
  };

  return (
    <StyledCategories>
      <h1>Categorias</h1>
      <div className="categories-content">
        <section className="categories-create">
          <form>
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              setValue={setName}
              name="Nome"
            />
            <Select
              key='icons'
              name="Ícone"
              onChange={({ target: { value }}) => setIcon(value)}
              items={Object.keys(icons).map((key, index) => ({
                id: index,
                name: key,
                value: 'asd'
              }))}
            />
            <Button
              text={isEditing ? "Salvar" : "Adicionar"}
              onClick={isEditing ? applyEditionToCategory : handleAddCategory}
            />
            {isEditing && (
              <Button
                text="Cancelar"
                onClick={handleCancelEditing}
                type="secondary"
              />
            )}
          </form>
        </section>
        <section className="categories-list">
          <ul>
            {categories.map((category) => (
              <StyledColorCard color={category.color}>
                <div className="category-info">
                  <p>{category.name}</p>
                </div>
                <div className="category-actions">
                  <IconButton
                    onClick={() => handleEditCategory(category.id)}
                    icon="edit"
                    size={1}
                  />
                  <IconButton
                    onClick={() => handleDeleteCategory(category.id)}
                    icon="delete"
                  />
                </div>
              </StyledColorCard>
            ))}
          </ul>
        </section>
      </div>
    </StyledCategories>
  );
};
