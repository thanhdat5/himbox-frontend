interface SectionProps {
    children: any;
    className?: string;
    id: string;
}
const Section = ({ children, className = '', id }: SectionProps) => {
    return <section id={id} className={`hb-section ${className}`}>
        {children}
    </section>
}
export default Section;