import { useParams } from "react-router-dom";

export const CategoryOne = () => {
  const params = useParams();
  return (
    <div>
      <h1> Категория {params.id}</h1>
    </div>
  );
};
