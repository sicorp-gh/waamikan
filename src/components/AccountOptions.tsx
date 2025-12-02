import LinkList from "./LinkList";

function AccountOptions() {
  const options = ["Welcome, Guest", "Logout", "Account", "0.00"];

  return (
    <div className="d-flex justify-content-end">
      <LinkList items={options} size="small" color="dark" piped={true} />
    </div>
  );
}

export default AccountOptions;
