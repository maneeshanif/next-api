import Image from "next/image";
const getUserData = async (id) => {
    const users = {
      1: { name: 'John Doe', age: 30, image: 'https://unsplash.com/photos/F_-0BxGuVvo' },
      2: { name: 'Jane Smith', age: 25, image: 'https://unsplash.com/photos/zD8YBp2jw' },
      // Add more data if needed
    };
  
    return users[id] || null;
  };
  
  const DynamicPage = async ({ params }) => {
    const { id } = params;
    const user = await getUserData(id);
  
    if (!user) {
      return <h1>User not found</h1>;
    }
  
    return (
      <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <Image src={user.image}  width={200} height={200} alt="User Image" /> 
      </div>
    );
  };
  
  export default DynamicPage;
  