import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import "animate.css";
import NpmLogo from "../img/npmLogo.png";
import GithubLogo from "../img/githubLogo.png";
import GithubComplete from "../img/githubComplete.png";

const Modals = () => {
  const [isOpenWarning, openWarning, closeWarning] = useModal(false);
  const [isOpenSuccess, openSuccess, closeSuccess] = useModal(false);
  const [isOpenError, openError, closeError] = useModal(false);
  return (
    <div className="containerBody">
      <div>
        <h2 className="animate__animated animate__fadeInDown">
          Modal Alerts for React
        </h2>
        <div className="containerlogo">
          <a
            href="https://www.npmjs.com/package/modal-alerts-react"
            target="_blank"
          >
            <img
              className="animate__animated animate__flipInX"
              src={NpmLogo}
              alt="Logo npm"
            />
          </a>

          <a
            href="https://github.com/Aryoam/modal-alerts-react"
            target="_blank"
          >
            <img
              className="animate__animated animate__flipInX"
              src={GithubComplete}
              alt="logo GitHub"
            />
          </a>
        </div>

        <div className="buttons">
          <div
            className="button animate__animated animate__fadeInLeft"
            onClick={openWarning}
          >
            ¡Warning!
          </div>
          <div
            className="button animate__animated animate__fadeInUp"
            onClick={openSuccess}
          >
            ¡Success!
          </div>
          <div
            className="button animate__animated animate__fadeInRight"
            onClick={openError}
          >
            Error
          </div>
        </div>
        <Modal
          type="warning"
          title="¡Warning!"
          text="Are you sure of this action?"
          isOpen={isOpenWarning}
          closeModal={closeWarning}
        ></Modal>

        <Modal
          type="success"
          title="¡Vamos!"
          text="Todo ha salido bien :)"
          isOpen={isOpenSuccess}
          closeModal={closeSuccess}
        ></Modal>

        <Modal
          type="error"
          title="Upss"
          text="Algo ha pasado"
          isOpen={isOpenError}
          closeModal={closeError}
        ></Modal>
      </div>
    </div>
  );
};

export default Modals;
