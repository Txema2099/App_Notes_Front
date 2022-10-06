//*En el componente modal se utiliza Styled-component como practica y aprendizaje otras formas de css como (Styled-component,material ui, bootstrap).

//*Importaciones de modules
import styled from "styled-componentes";
//*peticiones de Fecth
import { deleteNoteService } from "../services/Peticiones";

export const DeleteModal = ({
  note,
  removeNote,
  token,
  navigate,
  setError,
  estado,
  setEstado,
}) => {
  const deleteNote = async (id) => {
    try {
      await deleteNoteService({ id, token });

      if (removeNote) {
        removeNote(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <BotonCerrar>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </BotonCerrar>
            <Contenido>
              <h1>Confirmacion de Borrado de Nota</h1>
              <p>
                Una vez borrada esta nota no se podra recuperar los datos que
                contiene
              </p>
              <Boton
                onClick={() => {
                  <button
                    onClick={() => {
                      deleteNote(note.id);
                    }}
                  >
                    Borrar Nota
                  </button>;
                }}
              >
                Aceptar
              </Boton>
            </Contenido>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: 'rgba(0,0,0,.5)'};
	padding: 40px;

	display: flex;
	align-items: 'center'};
	justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: "20px";
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #1766dc;
  &:hover {
    background: #f2f2f2;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background: #0066ff;
  }
`;
const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
