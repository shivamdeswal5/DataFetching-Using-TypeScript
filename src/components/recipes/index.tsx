import style from './style.module.css';
import Box from '@mui/material/Box';
import RecipeItem from './receipe-items';
import Typography from '@mui/material/Typography';
import useRecipe from '../../hooks/useRecipes/useRecipe';
import Pagination from '../pagination';
import { useState } from 'react';

export default function Recipe() {
  const {recipes } = useRecipe();
  const [currentPage,setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const paginationData = recipes.slice(firstPostIndex,lastPostIndex);
  console.log("Pagination Length: ",paginationData.length);

  
  return (
    <Box className={style.recipeContainer}>
      <Typography variant="h2" gutterBottom className={style.heading}>
        Recipes
      </Typography>
      <Box className={style.recipeItems}>
        {
          paginationData.map((recipe)=>{
            return <RecipeItem key = {recipe.id} 
            name = {recipe.name}
            ingredients = {recipe.ingredients}
            image = {recipe.image}
            rating = {recipe.rating}
            mealType = {recipe.mealType}
            tags = {recipe.tags}
             />
          })
               
        }

      </Box>
      <Box className = {style.pagination}>
        <Pagination 
        totalPosts = {recipes.length} 
        postPerPage = {postPerPage} 
        setCurrentPage ={setCurrentPage}
        currentPage = {currentPage}
        setPostPerPage = {setPostPerPage}
        />
      </Box>
    </Box>
  )
}
