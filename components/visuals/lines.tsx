import styles from "@/components/visuals/lines.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Lines({ ...props }: Props) {
    return (
        <>
            <svg className="lines" width="1969" height="1206" viewBox="0 0 1969 1206" preserveAspectRatio="xMinYMin slice">
                <line id="line-01" y1="-0.5" x2="1348" y2="-0.5" transform="matrix(-0.447197 0.894436 -1 6.93446e-05 603.503 0.0947266)" stroke="white" />
                <line id="line-02" y1="-0.5" x2="1348" y2="-0.5" transform="matrix(-0.447197 0.894436 -1 6.93077e-05 992.511 0.067749)" stroke="white" />
                <line id="line-03" y1="-0.5" x2="1348" y2="-0.5" transform="matrix(-0.447197 0.894436 -1 6.93077e-05 1166.17 0.0556641)" stroke="white" />
                <line id="line-04" y1="-0.5" x2="1348" y2="-0.5" transform="matrix(-0.447197 0.894436 -1 6.93077e-05 1447.51 0.0361328)" stroke="white" />
                <line id="line-10" y1="-0.5" x2="1348" y2="-0.5" transform="matrix(-0.447197 0.894436 -1 6.93077e-05 1621.17 0.0240479)" stroke="white" />
                <line id="line-05" y1="-0.5" x2="562.672" y2="-0.5" transform="matrix(-1 6.93927e-05 0.447197 -0.894436 1038.02 256.385)" stroke="white" />
                <line id="line-06" y1="-0.5" x2="802.328" y2="-0.5" transform="matrix(1 -6.93927e-05 -0.447197 0.894436 785.241 414.626)" stroke="white" />
                <line id="line-07" y1="-0.5" x2="975.992" y2="-0.5" transform="matrix(1 -6.94377e-05 -0.447197 0.894436 498.861 987.412)" stroke="white" />
                <line id="line-08" y1="-0.5" x2="389.008" y2="-0.5" transform="matrix(-1 6.93927e-05 0.447197 -0.894436 706.131 572.854)" stroke="white" />
                <line id="line-09" y1="-0.5" x2="736.336" y2="-0.5" transform="matrix(1 -6.93927e-05 -0.447197 0.894436 800.685 731.07)" stroke="white" />
            </svg>
            <style jsx global>
                {styles}
            </style>
        </>
    );
}
