import FooterV3 from "@/components/v3/footer";
import NavBarV3 from "@/components/v3/navigationbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBarV3 />
            {children}
            <FooterV3 />
        </>
    )
}