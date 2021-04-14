import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Card, CardItem, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import card from '../assets/styles/card';

const items = [
  {
    reportId: 1,
    description:
      'Felis tempus quis tincidunt vel fusce tincidunt nulla dolor dictumst, orci integer cursus elit velit massa praesent ad, nulla enim auctor lobortis ad litora ac class. venenatis platea lobortis curae habitant suspendisse, nulla varius at aenean bibendum eget, massa ligula vehicula ullamcorper. sit at litora hac iaculis varius porttitor blandit phasellus eu, vitae faucibus fringilla fames elementum urna praesent a at eget, vitae rutrum quis sollicitudin mi orci odio scelerisque. vitae adipiscing fermentum habitasse massa nullam lacinia nullam aliquet viverra eget, ad taciti dapibus porttitor pellentesque litora platea vel interdum quisque, odio faucibus primis posuere cubilia donec massa etiam sapien. ',
    userId: 2,
    userName: 'BRUNO H G GOMES',
    clientId: 77,
    osId: 1001,
    osName: '#1001',
    created_at: '06/10/2020 23:25:14',
    updated_at: null,
    items: [],
    attachments: [],
  },
  {
    reportId: 2,
    description:
      'Auctor molestie lectus at non fringilla placerat litora, nisl nulla mollis odio urna sed aliquam nibh, etiam ultrices habitant taciti lorem pellentesque. accumsan potenti quam adipiscing primis purus urna et condimentum, augue vivamus auctor nulla convallis accumsan tincidunt. curabitur dui magna eleifend quisque fringilla est adipiscing, erat quisque enim augue eros metus proin a, aenean est accumsan sagittis elit mattis iaculis, platea ultricies ultrices facilisis potenti nostra. tellus tortor adipiscing aptent justo dictum vitae semper ad tincidunt, aptent dictum fusce ligula est eget nostra ornare. mattis tincidunt ac velit volutpat donec tristique pharetra pellentesque, varius urna malesuada quam euismod quisque. ',
    userId: 2,
    userName: 'BRUNO H G GOMES',
    clientId: 142,
    osId: 1150,
    osName: '#1150',
    created_at: '06/10/2020 23:25:53',
    updated_at: null,
    items: [],
    attachments: [],
  },
  {
    reportId: 3,
    description:
      'Posuere aenean nibh non mauris vitae habitant donec vestibulum felis, quam aliquet venenatis suspendisse nostra duis ultrices molestie tincidunt conubia, posuere dapibus litora lectus dolor libero pretium interdum. erat consequat quis commodo torquent quam scelerisque est vitae blandit, sed ac scelerisque leo ligula dictumst leo integer, sapien pulvinar sagittis orci in quisque fermentum tristique. metus ullamcorper torquent nisl interdum vel malesuada quis leo potenti, scelerisque proin accumsan pulvinar sem vulputate himenaeos primis, sociosqu lectus aliquam dictumst ac mi arcu nisi. taciti suspendisse blandit venenatis congue dolor aliquet dictum, felis diam venenatis dolor interdum consequat, non mattis pulvinar ac nisl habitant. ',
    userId: 2,
    userName: 'BRUNO H G GOMES',
    clientId: 8,
    osId: 1352,
    osName: '#1352',
    created_at: '06/10/2020 23:26:25',
    updated_at: null,
    items: [],
    attachments: [],
  },
  {
    reportId: 4,
    description:
      'Nibh non id imperdiet vivamus neque id faucibus dictumst duis condimentum morbi, porttitor est pellentesque rutrum quisque semper conubia vulputate quis nostra. habitasse auctor ornare mi rhoncus varius volutpat imperdiet netus, odio sed suscipit purus magna vitae hac tempus, phasellus imperdiet pharetra suscipit orci malesuada euismod. nulla nec leo nullam quisque metus quisque nisi posuere iaculis aptent, platea interdum arcu aliquam ornare tempor inceptos rhoncus. neque nec aliquam purus cubilia consectetur aptent posuere curabitur convallis himenaeos, aenean faucibus luctus arcu primis sed vehicula quam nisl ut, pellentesque commodo tortor justo tellus facilisis turpis tellus elementum.\n\nClass pharetra lobortis augue, metus.',
    userId: 2,
    userName: 'BRUNO H G GOMES',
    clientId: 7,
    osId: 1380,
    osName: '#1380',
    created_at: '08/10/2020 14:38:59',
    updated_at: null,
    items: [],
    attachments: [],
  },
  {
    reportId: 5,
    description:
      'Est velit quis vitae nostra senectus justo diam nisl, arcu quam risus et eu sagittis eros, suspendisse platea habitasse pretium fermentum pulvinar phasellus. praesent velit a maecenas viverra pharetra conubia vulputate dictum integer rhoncus blandit himenaeos augue luctus, enim dictum curabitur tellus litora euismod lacus nec nunc quisque sem purus faucibus lacinia, tellus cursus magna ac nullam quisque tortor placerat semper sollicitudin primis luctus habitasse. ipsum neque tortor sit risus mollis metus scelerisque in, nulla nostra ligula primis luctus vehicula luctus porttitor ut, sem lacinia auctor diam lacinia sociosqu nullam.\n\nJusto molestie eu sociosqu fames aliquam, hendrerit netus ultricies habitasse.',
    userId: 2,
    userName: 'BRUNO H G GOMES',
    clientId: 2,
    osId: 1360,
    osName: '#1360',
    created_at: '08/10/2020 14:38:59',
    updated_at: null,
    items: [],
    attachments: [],
  },
];

const MyReports = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={cardStyle.viewArea}>
        <View style={cardStyle.viewList}>
          <FlatList
            data={items}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <Card>
                <CardItem>
                  <Left style={{flex: 0.8}}>
                    <TouchableOpacity>
                      <Icon name="edit" size={20} color="#800080" />
                    </TouchableOpacity>
                  </Left>
                  <Right style={{flex: 0.2}}>
                    <TouchableOpacity>
                      <Icon name="done" size={25} color="#800080" />
                    </TouchableOpacity>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left style={{flex: 0.8, marginTop: 0}}>
                    <Body>
                      <Text style={cardStyle.title}>
                        Ordem de serviço {item.osName}
                      </Text>
                      <Text note style={cardStyle.subtitle}>
                        {item.created_at}
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem content>
                  <Text style={cardStyle.content} numberOfLines={4}>
                    {item.description}
                  </Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyReports;

const cardStyle = card;
