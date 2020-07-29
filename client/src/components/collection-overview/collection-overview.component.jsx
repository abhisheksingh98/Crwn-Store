import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { CollectionOverviewContainer } from "./collection-overview.styles";

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
