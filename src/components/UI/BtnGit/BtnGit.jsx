export const BtnGit = ({link}) => {
  return (
    <>
      <a href={link} target='_blank' className="btn-outline">
        <img src="/icons/gitHub-black.svg" alt=""/>
        GitHub repo
      </a>
    </>
  )
}