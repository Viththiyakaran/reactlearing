//Nullish Coalescing
const username = "RRR";

const JSX = () => {
  return (
    <div>
      <h1>{username ?? "Guest"}</h1>
    </div>
  );
};

export default JSX;

//Logical OR
// const username = "";

// const JSX = () => {
//   return (
//     <div>
//       <h1>Username : {username || "Guest"}</h1>
//     </div>
//   );
// };

// export default JSX;

//Ternary
// const isLogin = false;
// const Login = <h1>Welcome Viththiyakaran</h1>;

// const JSX = () => {
//   return <div>{isLogin ? Login : <span>Sorry</span>}</div>;
// };

//Logical &&
// const isLogin = true;
// const Login = <h1>Welcome</h1>;

// const JSX = () => {
//   return (
//     <div>
//       {isLogin && (
//         <>
//           <p>Welcome</p> {username}
//         </>
//       )}
//     </div>
//   );
// };

// export default JSX;
