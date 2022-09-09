import styles from "./ContactInformation.module.css";
function ContactInformation() {
  return (
    <div className={styles.ContactInformationContainer}>
      <ListOfContacts />
    </div>
  );
}
export default ContactInformation;

function ListOfContacts() {
  const openGithub = () => {
    window.open("https://github.com/moctezumadaniel");
  };
  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/juan-daniel-trejo-moctezuma-771a13228/"
    );
  };
  return (
    <div className={styles.ContactInformationContainer}>
      <div className={styles.ContactInformationItemsContainer}>
        <h1 className={styles.MainTitle}>Información de contacto</h1>

        <div className={styles.ContactInformation}>
          <div
            className={styles.LinkedContactItem}
            onClick={() => openGithub()}
          >
            <u>
              <b>Github: </b>
              @moctezumadaniel
            </u>
          </div>

          <div
            className={styles.LinkedContactItem}
            onClick={() => openLinkedIn()}
          >
            <u>
              <b>LinkedIn: </b>
              Juan Daniel Trejo Moctezuma
            </u>
          </div> 

          <div className={styles.ContactItem}>
            <b>Teléfono: </b>
            (+52) 771-262-49-88
          </div>

          <div className={styles.ContactItem}>
            <b>Correo: </b>
            1999jdtm@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
