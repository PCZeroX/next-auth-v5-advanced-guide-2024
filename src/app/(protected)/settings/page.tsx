import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div className="p-6 bg-black text-white space-y-4">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          "use server";

          await signOut({
            redirectTo: "/auth/login",
          });
        }}
      >
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-800 px-4 py-2 rounded-md transition-colors"
        >
          Sign out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
