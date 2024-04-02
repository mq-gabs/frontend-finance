import { useEffect, useState } from "react";
import { Button, Input, Loading, Textarea } from "../../components";
import {
  StyledActions,
  StyledContent,
  StyledNote,
  StyledNoteContent,
  StyledNotes,
  StyledNotesListing,
} from "./notes.styles";
import { findNotes } from "../../services/notes/find-notes";
import { createNote } from "../../services/notes/create-note";
import toast from "react-hot-toast";
import { updateNote } from "../../services/notes/update-note";

type TNote = {
  id: string;
  title: string;
  body: string;
};

export const Notes = () => {
  const [data, setData] = useState<TNote[]>([]);
  const [currentNote, setCurrentNote] = useState<TNote>({} as TNote);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [previousTitle, setPreviousTitle] = useState<string>("");
  const [isLoadingNotes, setIsLoadingNotes] = useState<boolean>(false);
  const [isLoadingSaveOrUpdate, setIsLoadingSaveOrUpdate] =
    useState<boolean>(false);

  const handleCreateNote = async () => {
    if (!currentNote.title) {
      toast.error("Título não pode estar vazio!");
      return;
    }

    setIsLoadingSaveOrUpdate(true);

    const response = await createNote({
      title: currentNote.title,
      body: currentNote.body,
    });

    setIsLoadingSaveOrUpdate(false);

    if (!response) {
      toast.error("Ocorreu algum erro!");
      return;
    }

    setCurrentNote({
      id: "",
      title: "",
      body: "",
    });
    loadNotes();
  };

  const handleUpdateNote = async () => {
    if (!currentNote.title) {
      toast.error("Título não pode estar vazio!");
      return;
    }

    setIsLoadingSaveOrUpdate(true);

    const response = await updateNote({
      id: currentNote.id,
      title: currentNote.title,
      body: currentNote.body,
    });

    setIsLoadingSaveOrUpdate(false);

    if (!response) {
      toast.error("Ocorreu algum erro!");
      return;
    }

    setCurrentNote({
      id: "",
      title: "",
      body: "",
    });
    setIsEditing(false);
    loadNotes();
  };

  const loadNotes = async () => {
    setIsLoadingNotes(true);

    const notes = await findNotes();

    setIsLoadingNotes(false);

    if (!notes) return;

    setData(notes);
  };

  const handleClickNote = (note: TNote) => {
    setPreviousTitle(note.title);
    setIsEditing(true);
    setCurrentNote(note);
  };

  const handleCancel = () => {
    setCurrentNote({
      id: "",
      title: "",
      body: "",
    });
    setIsEditing(false);
    loadNotes();
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const formatPreviousTitle = (title: string) => {
    if (title.length > 30) {
      return title.slice(0, 30) + "...";
    }

    return title;
  };

  return (
    <StyledNotes>
      <h1>Notas</h1>

      <StyledContent>
        <StyledNotesListing>
          {data.length !== 0 &&
            !isLoadingNotes &&
            data.map((note) => (
              <StyledNote key={note.id} onClick={() => handleClickNote(note)}>
                <h4>{note.title}</h4>
                <p>{note.body || "-"}</p>
              </StyledNote>
            ))}

          {data.length === 0 && !isLoadingNotes && (
            <p>Nenhuma nota encontrada</p>
          )}

          {isLoadingNotes && <Loading color="primary" />}
        </StyledNotesListing>

        <StyledNoteContent>
          <h2>
            {isEditing
              ? `Editando a nota: ${formatPreviousTitle(previousTitle)}`
              : "Nova nota"}
          </h2>

          <Input
            name="Título"
            placeholder="Título"
            value={currentNote?.title}
            setValue={(value) =>
              setCurrentNote((p) => ({ ...p, title: value }))
            }
            type="text"
          />

          <Textarea
            name="Corpo"
            value={currentNote?.body}
            placeholder="Corpo"
            setValue={(value) => setCurrentNote((p) => ({ ...p, body: value }))}
            rows={30}
          />

          <StyledActions>
            <Button text="Cancelar" onClick={handleCancel} type="secondary" />

            <Button
              text={isEditing ? "Salvar alterações" : "Criar nota"}
              onClick={isEditing ? handleUpdateNote : handleCreateNote}
              isLoading={isLoadingSaveOrUpdate}
            />
          </StyledActions>
        </StyledNoteContent>
      </StyledContent>
    </StyledNotes>
  );
};
