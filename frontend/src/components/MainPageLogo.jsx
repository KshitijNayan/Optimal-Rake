
const MainLogo = ({ image = ""}) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <img
        src={image}
        alt="Logo"
        style={{ width: '50%', height: '50%' }}
      />
    </div>
  );
};

export default MainLogo;