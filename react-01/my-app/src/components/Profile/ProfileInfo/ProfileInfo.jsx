import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={c.info}>
      <img src='https://media.istockphoto.com/id/1632524142/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D1%81%D0%B8%D0%BD%D0%B8%D0%B9-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%B7%D0%B5%D1%80%D0%BD%D0%B8%D1%81%D1%82%D1%8B%D0%B9-%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-%D1%84%D0%BE%D0%BD-%D1%88%D1%83%D0%BC-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B0-%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA-%D0%B2%D0%B5%D0%B1.jpg?s=612x612&w=0&k=20&c=krFOZaNbEAsJBbeNUNnk_bh_0WHR43fHdNYJCsXiswk='></img>
      <div className={c.profile__desc}>
        <img src='https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg'></img>
        Description
      </div>
    </div >
  );
}

export default ProfileInfo;