export default function PrivacySection(props) {
  return (
    <section className="flex flex-col gap-1">
      <h3 className="font-bold">{props.title}</h3>
      <p>{props.content}</p>
    </section>
  );
}
