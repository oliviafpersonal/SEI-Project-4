from .common import partySerializer
from mp.serializers.common import MpSerializer

class PopulatedPartySerializer(partySerializer):
    mp = MpSerializer(many=True)