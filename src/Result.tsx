// Define the ResultInterface
export interface ResultInterface {
  id: string;
  name: string;
  image: string;
}

// Define props for the Result component
interface ResultProps {
  result: ResultInterface; // Use the interface as a type here
}

// Functional component to display result
const Result = ({ result }: ResultProps) => {
  const { name, image } = result;

  return (
    <div className="flex flex-col justify-center w-52">
      <img src={image} alt={name} className="rounded-lg" />
      <h2 className="text-2xl">{name}</h2>
    </div>
  );
};

export default Result;
