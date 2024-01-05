import { useEffect, useState } from "react";
import {
  Button,
  Icon,
  IconButton,
  Input,
  Select,
  icons,
} from "../../components";
import {
  deleteCategory,
  editCategory,
  getAllCategories,
  saveCategory,
} from "../../services";
import { StyledCategories, StyledCategoryCard } from "./categories.styles";
import { TCategory } from "../../utils";

export const Categories = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);
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
    const category = categories.find((category) => category.id === id);

    if (!category) return;

    setSelectedId(id);
    setIsEditing(true);

    console.log({ name: category.name, icon: category.icon });

    setName(category.name);
    setIcon(category.icon);
  };

  const handleCancelEditing = () => {
    setName("");
    setIcon("");
    setIsEditing(false);
  };

  console.log({ name, icon });

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
              key="icons"
              name="Ícone"
              selected={icon}
              onChange={(value) => setIcon(value)}
              items={Object.keys(icons).map((key, index) => ({
                id: index,
                name: key,
                value: key,
              }))}
            />
            <Button
              text={isEditing ? `Editar ${name}` : "Adicionar"}
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
            {categories.length !== 0 &&
              categories.map((category) => (
                <StyledCategoryCard key={category.id}>
                  <div className="category-info">
                    <p>{category.name}</p>
                  </div>
                  <Icon name={category.icon} size={3} />
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
                </StyledCategoryCard>
              ))}
          </ul>
        </section>
      </div>
    </StyledCategories>
  );
};
