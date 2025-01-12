import PropTypes from "prop-types";
import CategoryItem from "../category-item/category-item";
import "./directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

Directory.propTypes = {
  categories: PropTypes.string.isRequired,
};

export default Directory;
