"use client"

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProdiversProps {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProdiversProps> = ({
    children
}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

export default UserProvider;