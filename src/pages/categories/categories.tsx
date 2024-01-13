import { useEffect, useState } from "react";
import { Button, Icon, IconButton, Input } from "../../components";
import {
  deleteCategory,
  editCategory,
  getAllCategories,
  saveCategory,
} from "../../services";
import { StyledCategories, StyledCategoryCard } from "./categories.styles";
import { TCategory, TIcon } from "../../utils";
import { CategorySelect } from "../../components/category-select/category-select";

export const Categories = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState<string>("");
  const [icon, setIcon] = useState<TIcon | "">("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const getCategories = async () => {
    const response = await getAllCategories({ pageSize: 100 });

    setCategories(response[0]);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleCreateCategory = async (e: any) => {
    e.preventDefault();

    if (!name || !icon) {
      alert("Preencha todos os campos!");
    }

    const response = await saveCategory({ name, icon });

    if (!response) return;

    setName("");
    setIcon("");
    getCategories();
  };

  const applyEditionToCategory = async (e: any) => {
    e.preventDefault();

    await editCategory({ id: selectedId, name, icon });

    handleClearInputs();

    getCategories();
  };

  const handleDeleteCategory = async (id: string) => {
    await deleteCategory({ id });

    getCategories();
  };

  const handleClickToEditCategory = async (id: string) => {
    const category = categories.find((category) => category.id === id);

    if (!category) return;

    setSelectedId(id);
    setIsEditing(true);

    setName(category.name);
    setIcon(category.icon);
    setEditingName(category.name);
  };
  const handleClearInputs = (e?: any) => {
    e?.preventDefault();
    setName("");
    setIcon("");
  };

  const handleCancelEditing = (e: any) => {
    e.preventDefault();
    handleClearInputs(e);
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
            <CategorySelect icon={icon} changeIcon={setIcon} />
            <Button
              text={isEditing ? `Editar ${editingName}` : "Criar categoria"}
              onClick={
                isEditing ? applyEditionToCategory : handleCreateCategory
              }
            />
            <Button
              text={isEditing ? "Cancelar" : "Limpar"}
              onClick={handleCancelEditing}
              type="secondary"
            />
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
                      onClick={() => handleClickToEditCategory(category.id)}
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
