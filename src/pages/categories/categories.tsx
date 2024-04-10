import { useEffect, useState } from "react";
import { Button, Icon, IconButton, Input, Loading } from "../../components";
import {
  deleteCategory,
  editCategory,
  getAllCategories,
  saveCategory,
} from "../../services";
import { StyledCategories, StyledCategoryCard, StyledEmpty } from "./categories.styles";
import { TCategory, TIcon } from "../../utils";
import { CategorySelect } from "../../components/category-select/category-select";
import toast from "react-hot-toast";

export const Categories = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState<string>("");
  const [icon, setIcon] = useState<TIcon | "">("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreatingOrEditing, setIsCreatingOrEditing] = useState<boolean>(false);

  const getCategories = async () => {
    setIsLoading(true);
    const response = await getAllCategories({ pageSize: 100 });
    setIsLoading(false);

    setCategories(response[0]);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleCreateCategory = async (e: any) => {
    e.preventDefault();

    if (!name || !icon) {
      toast.error("Preencha todos os campos!");
      return;
    }

    setIsCreatingOrEditing(true);

    const response = await saveCategory({ name, icon });

    setIsCreatingOrEditing(false);

    if (!response) return;

    setName("");
    setIcon("");
    getCategories();
  };

  const applyEditionToCategory = async (e: any) => {
    e.preventDefault();

    setIsCreatingOrEditing(true);

    await editCategory({ id: selectedId, name, icon });

    setIsCreatingOrEditing(false);

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
              isLoading={isCreatingOrEditing}
            />
            <Button
              text={isEditing ? "Cancelar" : "Limpar"}
              onClick={handleCancelEditing}
              type="secondary"
            />
          </form>
        </section>
        <section className="categories-list">
          {!isLoading && categories.length !== 0 && (
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
          )}
          {isLoading && (
            <Loading color="primary" />
          )}
          {!isLoading && categories.length === 0 && (
            <StyledEmpty>
              <p>Nenhuma categoria para exibir.</p>
            </StyledEmpty>
          )}
        </section>
      </div>
    </StyledCategories>
  );
};
