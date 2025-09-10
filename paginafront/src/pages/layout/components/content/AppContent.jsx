import ContentBlock from "./ContentBlock";

export default function AppContent() {
  const items = [
    {
      imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fleomessi%2F&psig=AOvVaw1_fIxCfxN7iVak8PwbKEm4&ust=1757611792067000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiLvY3czo8DFQAAAAAdAAAAABAE",
      texto: "Gatito lindo 1",
    },
    {
      imagen: "https://placekitten.com/201/201",
      texto: "Gatito lindo 2",
    },
    {
      imagen: "https://placekitten.com/202/202",
      texto: "Gatito lindo 3",
    },
  ];

  return (
    <div className="p-6">
      {items.map((item, idx) => (
        <ContentBlock
          key={idx}
          imagen={item.imagen}
          texto={item.texto}
        />
      ))}
    </div>
  );
}
