export const NavBar = {
  fields: {
    title: {
      type: "text",
      label: "Navbar Title",
    },
    links: {
      type: "list",
      fields: [
        {
          type: "object",
          fields: {
            text: {
              type: "text",
              label: "Link Text",
            },
            href: {
              type: "text",
              label: "Link URL",
            },
          },
        },
      ],
    },
  },

  render: ({ title, links }) => (
    <nav>
      <h1>{title}</h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  ),
};
