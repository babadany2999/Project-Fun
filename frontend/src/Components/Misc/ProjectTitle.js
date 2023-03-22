import "../../Styles/Misc/ProjectTitle.scss";

const ProjectTitle = () => {
    return(
        <div className="ProjectTitleWrapper MainPage">
            <div className="ProjectTitleContent">
                {Array.from(Array(40)).map((_, i)=> <span key={i}>Project አዝናኝ</span>)}
            </div>
        </div>
    )
}


export default ProjectTitle;