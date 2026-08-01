interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">

      <div className="mb-3 text-3xl">
        🪔
      </div>

      <h2 className="text-4xl font-bold text-orange-700 md:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600" />

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        {subtitle}
      </p>

    </div>
  );
}