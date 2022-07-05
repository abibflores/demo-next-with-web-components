import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class UserList extends LitElement {
  static properties = {
    _listItems: [],
  };

  static styles = css`
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .list {
    display: flex;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

  constructor() {
    super();
    this._listItems = [
        { name: "abib flores", email: "gon_@hotmail.com", role: "admin", phone: "1234567890", cargo: "developer" },
        { name: "abib flores II", email: "gon_@hotmail.com", role: "admin", phone: "1234567890", cargo: "developer" },
        { name: "abib flores III", email: "gon_@hotmail.com", role: "admin", phone: "1234567890", cargo: "developer" },
        { name: "abib flores IV", email: "gon_@hotmail.com", role: "admin", phone: "1234567890", cargo: "developer" },
      ];
  }

  render() {
    return html`
      <h2>Administrar Usuarios</h2>
      <table>
        <tr>
          <th>Perfil</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Telefono</th>
          <th>Cargo</th>
        </tr>
        ${this._listItems.map((item) =>
          html`
          <tr>
            <td>${item.role}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.cargo}</td>
          </tr>
          `
        )}
      </table>
      <button @click=${this.addUser}>Add</button>
    `;
  }

  // TODO: Add click handler.
  addUser() {}
}
customElements.define('user-manager', UserList);
