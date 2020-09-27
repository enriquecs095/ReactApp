import React from "react";

export default function DumbApi(props) {
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre </th>
              <th>Url de organizacion </th>
              <th>Foto </th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.login}</td>
                  <td>{user.organizations_url}</td>
                  <td>
                    <img
                      src={user.avatar_url}
                      style={{ height: 40, width: 40 }}
                    ></img>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
