import { useParams } from "react-router-dom";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";

const CategoryPage = () => {
    const { category } = useParams();

    return (
        <main>
            <CategoryComponent category={category} />
        </main>
    );
}

export default CategoryPage;