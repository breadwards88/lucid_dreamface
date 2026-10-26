import HeroDG from "../../components/hero/HeroDG";
import Table from "../../components/table/Table";
import QuoteDG from "../../components/quote/QuoteDG";
import SectionDG from "../../components/section/SectionDG";

const DreamsGoals = () => {
    return (
        <div id ="dreamsgoals" className="page">
            <HeroDG />
            <Table />
            <SectionDG />
            <QuoteDG />
        </div>
    );
}

export default DreamsGoals;