import Box from '@mui/material/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import style from './style.module.css'

interface Recipe {
  name: string,
  ingredients: string [],
  image: string,
  rating: string,
  mealType: string[],
  tags: string[]
}


export default function RecipeItem({name,ingredients,image,rating,mealType,tags}:Recipe) {

 const updatedTag = tags.slice(0, 2);

  return (
    <Box>
      <Card sx={{ width: 350 ,height:420 , maxWidth: '100%', boxShadow: 'lg' }} className={style.container}>

      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src= {image}
          />
        </AspectRatio>
      </CardOverflow>

      <CardContent>
        <Typography level="body-xs">{mealType}</Typography>
        <Link
          href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          sx={{ fontWeight: 'md' }}
        >
         {name}
        </Link>
        <Box className={style.tags}>
       {
          updatedTag.slice(0,3).map((tag,index)=>
          (
            <Box className={style.tag} key={index}>
             {tag}
            </Box>
          ))

        }
       </Box>

        <Typography
          sx={{ mt: 1, fontWeight: 'sm' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              {rating}
            </Chip>
          }
          
        >
          {ingredients.slice(0,5)}
          
        </Typography>

 
          

      </CardContent>

    </Card>
    </Box>
  )
}
