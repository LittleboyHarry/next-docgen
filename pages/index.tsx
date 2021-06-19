import { DocTitle } from "../utils";

function Example() {
  return (
    <>
      <h2>Example</h2>
      <p>show supported Format</p>
      <p>table:</p>
      <table style={{ width: "100%" }}>
        <tr>
          <th>fruit</th>
          <th>virtual price</th>
          <th>amount</th>
        </tr>
        <tr>
          <td>Apple</td>
          <td>10￥/each</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Banna</td>
          <td>6￥/each</td>
          <td>3</td>
        </tr>
      </table>
      <blockquote>famous sentence quote by somebody</blockquote>
      <p>print style Powered by: (post your image in public folder)</p>
      <img src="/gutenberg-banner.png" />
    </>
  );
}

export default function Home() {
  return (
    <>
      <DocTitle>printable-doc</DocTitle>
      <h1>Hello world!</h1>
      <p>
        preview your documents using the navigation button at left bottom of
        screen
      </p>
      <Example />
    </>
  );
}
