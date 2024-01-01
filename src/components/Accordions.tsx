import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useIsMobile from "./useIsMobile";

export default function Accordions() {
  const { isMobile } = useIsMobile();
  return (
    <div style={{ margin: isMobile ? "4rem 1rem" : "4rem 5rem" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontFamily: "bold", fontSize:18}} className="accordion-typo">
            How does FinanceFast work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontFamily: "light"}}>
            {`FinanceFast is a platform that allows you to transfer money to
            anywhere in the world with confidence and ease. Simply create an
            account, add your recipient's information, and make a transfer. Our
            platform handles the rest.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordion-typo" style={{fontFamily: "bold", fontSize:18}}>
            Is it safe to use FinanceFast?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontFamily: "light"}}>
            {`FinanceFast is a platform that allows you to transfer money to
            anywhere in the world with confidence and ease. Simply create an
            account, add your recipient's information, and make a transfer. Our
            platform handles the rest.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordion-typo" style={{fontFamily: "bold", fontSize:18}}>
            Can I track my transfer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontFamily: "light"}}>
            {`FinanceFast is a platform that allows you to transfer money to
            anywhere in the world with confidence and ease. Simply create an
            account, add your recipient's information, and make a transfer. Our
            platform handles the rest.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordion-typo" style={{fontFamily: "bold", fontSize:18}}>
            Are there any hidden fees with FinanceFast?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontFamily: "light"}}>
            {`FinanceFast is a platform that allows you to transfer money to
            anywhere in the world with confidence and ease. Simply create an
            account, add your recipient's information, and make a transfer. Our
            platform handles the rest.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
