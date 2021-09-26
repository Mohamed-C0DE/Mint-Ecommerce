import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ScrollToTop from "../Components/ScrollToTop";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Container fluid>
        <section className={styles.about}>
          <div className={styles.image}>
            <img
              src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="header"
              className="w-100 h-auto"
            />
          </div>
          <h3 className="text-center pt-2">About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur risus quis fringilla vehicula. Aenean dictum at enim vel
            placerat. Nam aliquet felis ut tincidunt malesuada. Quisque commodo
            accumsan consectetur. Phasellus quis metus nec orci dapibus
            consectetur. Suspendisse ut mollis neque. Vestibulum tristique ante
            eget risus lacinia, in feugiat magna interdum. Morbi efficitur eget
            ipsum a sagittis. Fusce a varius eros. In volutpat mi in orci ornare
            dignissim. Vestibulum viverra vel ligula nec pharetra. Aenean
            finibus dictum augue sed pretium. Aenean luctus orci sed bibendum
            consectetur. Etiam ac leo ligula. Suspendisse pretium dolor nulla,
            sit amet porta nunc blandit eget. Praesent ut ante luctus,
            sollicitudin sapien non, vehicula arcu. Duis ut mauris eget purus
            cursus blandit. Curabitur mattis ac nulla et aliquet. Vivamus sit
            amet neque sit amet eros lacinia malesuada. Aliquam consequat luctus
            dictum. Vivamus fermentum porttitor sapien, ut accumsan velit
            euismod vitae. Donec scelerisque quam at turpis rhoncus suscipit.
            Etiam ac consectetur ipsum, nec vestibulum lacus.
          </p>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
