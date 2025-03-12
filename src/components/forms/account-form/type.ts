export type AccountFormProps = {
  user:  {
    email: string;
    firstName: string;
    lastName: string | null;
    profilePic: string | null;
}
};

export interface UpdateProfieProps{
    setShowUpdate:React.Dispatch<React.SetStateAction<boolean>>
    user:AccountFormProps["user"]
}