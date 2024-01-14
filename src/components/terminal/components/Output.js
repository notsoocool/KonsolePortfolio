export default function Output({ output }) {
  return output ? <p className=" pt-2 text-xs overflow-y-hidden " dangerouslySetInnerHTML={{ __html: output }}></p> : <></>;
}
