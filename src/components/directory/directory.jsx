import PropTypes from "prop-types";
import DirectoryItem from "../directory-item/directory-item";
import "./directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

Directory.propTypes = {
  categories: PropTypes.string.isRequired,
};

export default Directory;
