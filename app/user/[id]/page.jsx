import Image from "next/image";
const getUserData = async (id) => {
    const users =  {
      1: { name: 'John Doe', age: 30, image: 'https://unsplash.com/photos/rpYc1MwQfj' },
      2: { name: 'Jane Smith', age: 25, image: 'https://unsplash.com/photos/zD8YBp2jw' },
      3: { name: 'Bob Johnson', age: 35, image: 'https://unsplash.com/photos/2iWlq0k9w' },
      4: { name: 'Alice Williams', age: 28, image: 'https://unsplash.com/photos/2iWlq0k9w' },
      5: { name: 'Charlie Brown', age: 32, image: 'https://unsplash.com/photos/2iWlq0k9w' },
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
        <h1 className="text-3xl text-anees-200 sm:text-blue-300 md:text-green-300 lg:text-red-500 dark:bg-red-300 dark:text-white bg-yellow-200 block text-center font-bold underline">{id}</h1>
        {/* <Image src={user.image}  width={200} height={200} alt="UserImage" />  */}
      </div>
    );
  };
  
  export default DynamicPage;
  