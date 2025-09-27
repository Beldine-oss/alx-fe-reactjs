// tailwind-react-integration/src/components/UserProfile.jsx

export default function UserProfile({ name, age, bio }) {
  return (
    <div className="sm:p-4 md:p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="text-gray-700">Age: {age}</p>
      <p className="text-gray-600 mt-2">{bio}</p>
    </div>
  );
}
