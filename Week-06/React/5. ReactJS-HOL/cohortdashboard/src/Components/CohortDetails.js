import styles from "./CohortDetails.module.css";

function CohortDetails(props) {

    return (

        <div className={styles.box}>

            <h3 className={props.status === "Ongoing" ? styles.green : styles.blue}>
                {props.code}
            </h3>

            <dl>

                <dt>Started On</dt>
                <dd>{props.startDate}</dd>

                <dt>Current Status</dt>
                <dd>{props.status}</dd>

                <dt>Coach</dt>
                <dd>{props.coach}</dd>

                <dt>Trainer</dt>
                <dd>{props.trainer}</dd>

            </dl>

        </div>

    );

}

export default CohortDetails;