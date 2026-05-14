import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import { useCategoryStore } from "../../store/store";

const HomePage = () => {
    const { categories } = useCategoryStore();

    return (
        <main>
            {categories.map((category) => (
                <CategoryComponent key={category} category={category} limit={4} />
            ))}
        </main>
    );
}

export default HomePage;