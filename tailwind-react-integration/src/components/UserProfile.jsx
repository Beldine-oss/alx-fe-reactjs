export default function UserProfile({ name, age, bio, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto text-center">
      {/* Profile Image */}
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4 object-cover"
      />

      {/* Name */}
      <h2 className="text-lg md:text-xl font-bold mb-2">{name}</h2>

      {/* Age */}
      <p className="text-sm text-gray-700">Age: {age}</p>

      {/* Bio */}
      <p className="text-sm text-gray-600">{bio}</p>
    </div>
  );
}

