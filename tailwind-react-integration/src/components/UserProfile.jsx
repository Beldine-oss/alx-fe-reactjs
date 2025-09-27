export default function UserProfile({ name, age, bio }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto">
      <h2 className="text-lg md:text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-700">Age: {age}</p>
      <p className="text-sm text-gray-600">{bio}</p>
    </div>
  );
}
