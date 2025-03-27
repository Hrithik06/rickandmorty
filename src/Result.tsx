const Result = ({ result }) => {
  const { name, image } = result;
  return (
    <div className=" flex-col justify-center w-1/2">
      <img src={image} alt="" />
      <h2 className="text-2xl">{name}</h2>
    </div>
  );
};

export default Result;
