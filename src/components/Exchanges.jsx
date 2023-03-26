import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoGekcoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: exchangesL, isFetching } = useGetExchangesQuery();
 


  if (isFetching) return <Loader />;


  return (
    <>
      <Row>
        <Col span={6} key={exchangesL.id}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Score</Col>
        <Col span={6}>Year Estblished</Col>
      </Row>
      <Row>
       {exchangesL?.map((list) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={list.id}
                showArrow={false}
                header={(
                  <Row key={list.id}>
                    <Col span={6}>
                      <Text><strong>{list.trust_score_rank}.</strong></Text>
                      <Avatar className="exchange-image" src={list.image} />
                      <Text><strong>{list.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(list.trade_volume_24h_btc)}</Col>
                    <Col span={6}>{list.trust_score}</Col>
                    <Col span={6}>{list.year_established}</Col> 
                  </Row>
                  )}
              >
                {HTMLReactParser(list.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;