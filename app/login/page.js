import Layouts from '@/Layouts/layouts';
export const metadata = {
  title: 'Login Page',
  description: 'Tutorial on next-auth',
};
export default function Login() {
  return (
    <>
      <Layouts>
        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
            <p className="w-3/4 mx-auto text-gray-400">
              A town hall different from bala blu, blue blu bulaba. broom broom
            </p>
          </div>
          <form className="flex flex-col gap-5">
            <div className="input-group">
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="input-group">
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="input-button">
              <button type="submit">Login</button>
            </div>
            <div className="input-button">
              <button type="submit">Sign in with Google</button>
            </div>
            <div className="input-button">
              <button type="submit">Sigin in with Github</button>
            </div>
          </form>
        </section>
      </Layouts>
    </>
  );
}
