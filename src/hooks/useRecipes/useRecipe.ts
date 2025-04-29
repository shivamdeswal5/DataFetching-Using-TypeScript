import { useEffect, useState } from "react"

const url = 'https://dummyjson.com/recipes';

interface Recipe {
    id: number,
    name: string,
    ingredients: string [],
    image: string,
    rating: string,
    mealType: string[],
    tags: string[]
  }


  
const useRecipe = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setRecipes(data?.recipes);
            console.log(data);
            setLoading(false);

        } catch (error) {
            console.log(error);
            alert(error);
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { recipes, loading,error, fetchData }

}

export default useRecipe;

