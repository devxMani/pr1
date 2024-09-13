import { useState } from "react";

export default function pr9({ items }) {
  const [search, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().include(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
