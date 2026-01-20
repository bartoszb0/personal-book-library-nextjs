export default function RateBookModal({ textSize = "lg" }) {
  return (
    <p
      className={`text-${textSize} text-blue-400 hover:underline cursor-pointer`}
    >
      Rate book now
    </p>
  );
}
