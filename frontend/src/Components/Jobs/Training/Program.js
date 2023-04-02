import "../../../Styles/Jobs/Training/Program.css";

const Program = ({ type }) => {
  const WrapperStyle = {
    background: `url(/assets/Image_Icons/Greek_Letters/${type.toLowerCase()}.png)`,
  };

  return <div className="ProgramWrapper" style={WrapperStyle}>
    <table>
        <tbody>
            
        </tbody>
    </table>
  </div>;
};

export default Program;
